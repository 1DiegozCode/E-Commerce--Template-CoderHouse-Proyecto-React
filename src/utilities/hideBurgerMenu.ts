export default function hideBurgerMenu() {
  const burgerMenu: HTMLInputElement = document.getElementById(
    'check'
  ) as HTMLInputElement;
  if (burgerMenu) {
    burgerMenu.checked = false;
  }
}