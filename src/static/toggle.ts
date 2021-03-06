window.addEventListener('DOMContentLoaded', () => {
  const elements = window.document.querySelectorAll('.c-toggle');
  for (let i = 0; i < elements.length; i++) {
    const element: HTMLDivElement = <HTMLDivElement>elements[i];
    element.addEventListener('click', (event: MouseEvent) => {
      const currentTarget = <HTMLDivElement>event.currentTarget;
      const checked = currentTarget.getAttribute('aria-checked');
      currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
    });
  }
});
