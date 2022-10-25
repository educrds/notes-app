import React from "react";

function Header() {
  return (
    <header>
      <div className="header-title">
        <img
          width={32}
          height={32}
          alt="icone notes"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAABmJLR0QA/wD/AP+gvaeTAAABzUlEQVRYhe3Wv0sCYRgH8O95KolT0mwK/QViBGJQKITUHIhTY6eLgbgULdFgSOAS/QMONdcgkuDglGtjOtQWUpP446ihI8R78O65fPWG+04vD+/xfu593+c4adxIwU5xLRswHQdkFAdkFDdZ7Y9QqqPaRrcH9Xue68kSQgFkoigk4PMQEyR92/dH2LtBqzNPhz6xMGoKVnQbQhxZqS5cA6DVwdUTUSdA1bZwjbbQM1EkQN2ecMpvXj+IIgGa7y2eEXIh27W97UD0d4jMxT5OduGVeQsMVZQbOHswO5+xQ7lttgaAV0YuzpjPAFWaGKps0FBFpcloE+JL7c6zV7Wc8fV0xXaX2gEZhdH2lwfI78BjotFGKsoNnJpu9ckwdkiJm9IA8MjIclrdIqjSxGBsauZgzGv1yThtbxQHZBRG27Pi96KYRDqC9VW4OG8tBOT3op7FZtDKs0KOrJi0qIGgHUpHtMHjC47v8P5FzDnawu0hcZpCdigY0AbKPU8jCiRL2uDtk6cRBZqR2RosGGSowSJBZjQgQX83YPEaGhQK6GsL0tCgTHRpGhpUSCAWXo6GBvk8qCk4T2Fj7b/3iasB+ce43Njuf8gBGcUBGeUHvuJvNgb3gX0AAAAASUVORK5CYII="
        ></img>
        <h3>Notes</h3>
      </div>
    </header>
  );
}

export default Header;
