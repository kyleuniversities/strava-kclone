export const hideDropdownMenusExcept = (retainedMenuId: string = "") => {
  let menus: HTMLCollectionOf<Element> =
    document.getElementsByClassName("dropdown-menu");
  for (let i = 0; i < menus.length; i++) {
    const menu = menus.item(i);
    if (menu && menu.id && menu.id !== retainedMenuId) {
      if (menu.classList.contains("dropdown-show")) {
        menu.classList.remove("dropdown-show");
      }
      if (!menu.classList.contains("dropdown-hide")) {
        menu.classList.toggle("dropdown-hide");
      }
    }
  }
};
