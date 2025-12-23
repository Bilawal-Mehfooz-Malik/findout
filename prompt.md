# Design Prompt: Redesign of "Findout" Web App Home Screen

## 1. Objective

The goal of this project is to redesign the home screen for a web application called "Findout". The current design is functional but lacks visual appeal and feels "boring," especially on mobile and laptop screens. We need a modern, engaging, and user-friendly design that provides an excellent experience across mobile, tablet, and desktop devices.

## 2. Application Overview

"Findout" is a web application that allows users to discover and explore local "Residences" (like apartments, hotels) and "Foods" (like restaurants, cafes). The home screen is the primary entry point for users to begin their search and discovery journey.

## 3. Current Home Screen Structure & Components

The current home screen is built using React with shadcn UI components. It has a simple, single-column vertical layout.

Here is a breakdown of the components from top to bottom:

### 3.1. Home App Bar (`HomeAppBar`)
- **Location:** Top of the screen.
- **Contents:**
    - **Left:** App Name ("Findout"). A space for a future logo is needed.
    - **Right:**
        - "Login" button.
        - "Sign Up" button.
        - A theme toggle button (for light/dark mode).

### 3.2. Global Search Bar (`HomeSearchBar`)
- **Location:** Directly below the App Bar.
- **Functionality:** A prominent search input field that allows users to perform a global search for either "Residences" or "Food".

### 3.3. Category Section (`CategorySection`)
- **Location:** Below the Search Bar.
- **Contents:** Two distinct category cards displayed side-by-side.
    - Card 1: **"Food"**
    - Card 2: **"Residences"**
- **Functionality:** Clicking on a card navigates the user to a dedicated page for that category.

### 3.4. Popular Places Carousels (`PopularPlacesSection`)
- **Location:** Below the Category Section.
- **Contents:** Two separate, horizontally scrollable carousels.
    - Carousel 1 Title: **"Popular Residences"**
    - Carousel 2 Title: **"Popular Foods"**
- **Functionality:** Each carousel displays a series of `PlaceSummaryCard` components, showcasing popular items from that category.

### 3.5. Place Summary Card (`PlaceSummaryCard.tsx`)
This is a critical component used within the carousels. It summarizes a single place (either food or residence).

- **Dimensions:** Fixed width of 250px.
- **Structure & Content:**
    - **Cover Image:** A main image with a 4:3 aspect ratio (`250px` x `187.5px`).
    - **Status Indicator (Overlay):** An indicator shown on the bottom-left of the image to show the place's status (e.g., "Open", "Closed", "Available").
    - **Card Title:** The name of the place (e.g., "Modern Downtown Loft").
    - **Card Description:** The location of the place (e.g., "New York, 123 Main St").
    - **Card Content Area:**
        - **Pricing (Optional, for Residences):** Displays the price if available. Formatted as: `[Cost] / [Period] · per [Unit]` (e.g., "$120 / night · per room").
        - **Rating:** An average star rating with the total count of ratings (e.g., "⭐ 4.5 (120)").

## 4. Design Requirements & Goals

- **Visual Style:** We are looking for a clean, modern, and visually appealing aesthetic. The design should feel trustworthy, intuitive, and engaging to encourage exploration.
- **Layout:** The primary goal is to move away from the simple vertical stack. We need creative and effective layouts that are optimized for:
    - **Mobile:** (e.g., 375px width)
    - **Tablet:** (e.g., 768px width)
    - **Desktop:** (e.g., 1440px width)
- **Areas for Improvement:**
    - How can we make the search and category selection more interactive and visually interesting?
    - How can the "Popular" sections be presented in a more dynamic way than a simple carousel?
    - How can we better utilize space and create a more professional-looking layout on larger screens?

## 5. Deliverables

Please provide high-fidelity design mockups for the complete home screen, covering the three specified screen sizes (Mobile, Tablet, Desktop). The design should incorporate all the components and functionalities described above.
