# Sound Buttons React App

## Overview
This is a **React-based interactive button pad** application where users can toggle multiple buttons on and off. The app also includes a **dark/light mode toggle** that applies a global theme to the page. Users can turn all buttons on or off with a single click.

The app demonstrates best practices in **React state management**, including lifting state up, handling derived state correctly, and using side effects with `useEffect`.

---

## Tech Stack
- **React** (Functional Components & Hooks)
- **JavaScript (ES6+)**
- **CSS3**
- **React Icons** (`react-icons` for dark/light toggle)
- **Vite** (for project bundling and development)

---

## Features
- Toggle individual buttons on/off.
- Turn **all buttons on or off** with a single click.
- **Dark/Light mode** toggle with icons, applied globally on the `body` element.
- Buttons have individual colors and toggle states.
- Console logs the button state on click (for debugging/learning purposes).
- Fully responsive and interactive UI.

---

## React Concepts / Ideas Used
- **Lifting State Up**: The button state is managed in the parent `App` component, and functions to toggle buttons are passed down to the `Buttons` child component. This avoids derived state issues.
- **Avoiding Derived State**: Instead of duplicating state in the child component, the buttons’ state is always derived from the parent, keeping a **single source of truth**.
- **useState Hook**: For managing dynamic states such as button toggle status and dark/light mode.
- **useEffect Hook**: Used to apply dark/light mode class to the `body` element when the state changes.
- **Immutable Updates**: `map()` is used to create new arrays of button objects to ensure immutability and predictable state updates.

---

