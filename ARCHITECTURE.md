# Portfolio Projects Architecture

## Overview

This document describes the refactored, scalable architecture for managing projects in the portfolio. The system is designed to handle 1000+ lines of content efficiently by separating concerns and leveraging a data-driven approach.

## Architecture Layers

### 1. **Data Layer** (`src/data/projects/`)

Centralized, single source of truth for all project information.

```
src/data/projects/
├── types.ts          # TypeScript interfaces
├── projects.ts       # Individual project definitions
└── index.ts          # Public exports
```

#### Key Files

- **`types.ts`**: Defines all TypeScript interfaces
  - `Project`: Core project structure
  - `ProjectMedia`: Image paths
  - `ProjectChallenge`: Challenge/problem cards
  - `ProjectMetrics`: Impact statistics
  - `ImageConfig`: Per-project image styling (aspect ratios, object-fit, etc.)

- **`projects.ts`**: Individual project modules
  - `bettercampus.ts` (exported as const)
  - `ivue.ts`
  - `auxai.ts`
  - `notivet.ts`
  - `f1Predictor.ts`
  - Each can be customized independently

- **`index.ts`**: Public API
  - `projectsIndex`: Array of all projects
  - `getProject(slug)`: Helper to fetch by slug

#### Adding New Projects

Create a new project in `projects.ts`:

```typescript
export const myProject: Project = {
  title: "My Project",
  slug: "my-project",
  description: "...",
  category: "Projects" | "Previous Work",
  overview: "...",
  approach: "...",
  challenges: [...],  // Array of ProjectChallenge
  metrics: [...],     // Array of ProjectMetrics
  media: {
    hero: "/projects/myproject/hero.png",
    feat1: "/projects/myproject/feat1.png",
    feat2: "/projects/myproject/feat2.png",
    wide: "/projects/myproject/wide.png",
    final: "/projects/myproject/final.png",
  },
  // Optional: Custom image styling
  imageConfig: {
    hero: { aspectRatio: "aspect-video", objectFit: "cover", bgColor: "bg-black" },
    features: { aspectRatio: "aspect-[16/9]", objectFit: "contain", cols: 2 },
    wide: { aspectRatio: "aspect-[21/9]", objectFit: "cover" },
    final: { aspectRatio: "aspect-square", objectFit: "cover" },
  },
};
```

Then add it to `index.ts`:

```typescript
export const projectsIndex: Project[] = [
  bettercampus,
  ivue,
  // ... other projects
  myProject, // Add here
];
```

### 2. **Component Layer** (`src/components/projects/`)

Reusable, single-responsibility components that compose into the full project page.

```
src/components/projects/
├── ProjectContent.tsx              # Main orchestrator
└── sections/
    ├── CategoryHeader.tsx           # Category label
    ├── HeroTitle.tsx                # Title + description
    ├── Divider.tsx                  # Visual separator
    ├── HeroImage.tsx                # Hero image
    ├── OverviewSection.tsx          # Overview content
    ├── ApproachSection.tsx          # Technical approach
    ├── FeatureImages.tsx            # Feature showcase grid
    ├── WideImage.tsx                # Full-width showcase
    ├── ChallengesSection.tsx        # Challenge cards
    ├── ImpactSection.tsx            # Metrics grid
    └── ClosingImage.tsx             # Final showcase image
```

#### Component Responsibilities

Each component is responsible for:
- Rendering a single section
- Handling reveal animations (built-in)
- Accepting data as props
- Supporting placeholder fallbacks
- Adapting to image configurations

Example:

```typescript
// FeatureImages.tsx
interface FeatureImagesProps {
  images: Array<{ src: string; alt: string }>;
  config?: ImageConfig["features"];
  delay?: number;
}

export default function FeatureImages({ images, config, delay }) {
  const { aspectRatio = "aspect-[4/3]", objectFit = "cover", cols = 2 } = config || {};
  // Render with flexibility for different image sizes and layouts
}
```

### 3. **Route Layer** (`src/app/projects/[slug]/page.tsx`)

Thin, focused route component that orchestrates data + layout.

```typescript
export default function ProjectPage({ params }) {
  const { slug } = use(params);
  const project = getProject(slug);
  
  if (!project) notFound();
  
  return <ProjectContent project={project} />;
}
```

**Benefits:**
- Only 20 lines of code (was 458)
- Easy to understand at a glance
- Decoupled from component/data changes

## Design Patterns

### 1. **Data-Driven Architecture**

Data is completely separate from presentation:
- Change project info → edit one file in `src/data/projects/`
- Change layout → edit components in `src/components/projects/`
- Add new project → add one new project object + one array reference

### 2. **Configuration Over Code**

Image styling is configured per-project, not hardcoded:

```typescript
// Old approach: if statements
if (project.slug === "bettercampus") {
  // render with cover
} else if (project.slug === "ivue") {
  // render with contain
}

// New approach: configuration
<HeroImage config={project.imageConfig?.hero} />
```

### 3. **Composable Components**

Each component:
- Does one thing
- Is independent
- Can be tested in isolation
- Can be reused elsewhere

Example: `FeatureImages` doesn't know about projects—it just renders images.

### 4. **Graceful Degradation**

Components support placeholders when images are missing:

```typescript
const isPlaceholder = !src || src.includes("placeholder");

return isPlaceholder ? (
  <div>📸 Hero Image - Add your image here</div>
) : (
  <Image src={src} alt={alt} />
);
```

## Image Configuration Guide

Use `ImageConfig` to customize how images render on different projects:

```typescript
imageConfig: {
  // Hero image (large, top of page)
  hero: {
    aspectRatio: "aspect-video",      // or "aspect-square", "aspect-[16/9]"
    objectFit: "cover" | "contain",    // how image fills the space
    bgColor: "bg-black"                // background if using contain
  },
  
  // Feature showcase (2-3 column grid)
  features: {
    aspectRatio: "aspect-[4/3]",
    objectFit: "cover",
    cols: 2 | 3                        // number of columns
  },
  
  // Wide showcase (full width, cinematic)
  wide: {
    aspectRatio: "aspect-[21/9]",
    objectFit: "cover"
  },
  
  // Final image (closing visual)
  final: {
    aspectRatio: "aspect-video",
    objectFit: "cover"
  }
}
```

## Scaling Strategy

### Current State (5 projects)
- 458 lines → 20 lines in route
- ~60 lines per project definition
- ~40 lines per component

### At 20 Projects
- Route: still 20 lines
- Project data: ~1,200 lines (well-organized, easy to navigate)
- Components: unchanged (fully reusable)

### At 50 Projects
- Consider grouping projects in subdirectories:
  ```
  src/data/projects/
  ├── previous-work/
  │   ├── bettercampus.ts
  │   └── ivue.ts
  ├── ml-projects/
  │   ├── f1-predictor.ts
  │   └── auxai.ts
  └── index.ts
  ```

## Benefits of This Architecture

| Aspect | Improvement |
|--------|------------|
| **Lines of code** | 458 → 20 in main route (95% reduction) |
| **Duplication** | Eliminated; components are reused |
| **Maintainability** | Single project = one file in data layer |
| **Extensibility** | Add new project in 2 minutes |
| **Testing** | Each component testable in isolation |
| **Image flexibility** | Per-project configuration, no hardcoding |
| **Scalability** | Structure supports 50+ projects easily |
| **Developer experience** | Clear separation of concerns |

## Common Tasks

### Add a New Project

1. Create entry in `src/data/projects/projects.ts`
2. Export in `src/data/projects/index.ts`
3. Add images to `public/projects/[project-name]/`
4. Done—route automatically discovers it

### Change Image Styling for One Project

Edit `imageConfig` in that project's definition in `src/data/projects/projects.ts`.

### Add New Section Type

1. Create component in `src/components/projects/sections/`
2. Import in `ProjectContent.tsx`
3. Add to render order
4. Add data field to `Project` interface if needed

### Rename/Restructure Section

Only touch `ProjectContent.tsx` and the specific component—data layer untouched.

## Future Enhancements

- **Internationalization**: Add i18n keys to project data
- **Analytics**: Track which projects get viewed
- **Dynamic imports**: Lazy-load project components for performance
- **CMS integration**: Replace JSON data with CMS without changing components
- **Project filtering/search**: Use `projectsIndex` to build filters
- **Related projects**: Add `relatedProjects: string[]` field to suggest others
