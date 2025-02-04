export interface SiteDropdownNode {
  text: string;
  to?: string;
}

export interface SiteDropdownSection {
  title?: string;
  nodes: SiteDropdownNode[];
  colorScheme?: string;
}

export interface SiteDropdownData {
  dropdownId: string;
  title: string;
  sections: SiteDropdownSection[];
}
