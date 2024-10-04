// README.md
# Modal Component

A customizable React modal component.

## Installation

```bash
npm install @votre-nom-utilisateur/modal-component
```

## Usage

```jsx
import React, { useState } from 'react';
import { Modal } from '@votre-nom-utilisateur/modal-component';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is the modal content!</p>
      </Modal>
    </div>
  );
};

export default App;
```

## Props

- `isOpen` (boolean): Controls whether the modal is displayed.
- `onClose` (function): Callback function to close the modal.
- `children` (React.ReactNode): Content to be displayed inside the modal.

## License

MIT

