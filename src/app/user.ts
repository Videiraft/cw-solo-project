export class User {
  email: string;
  password: string;
  links: Link[];
  tags: string[];
}

interface Link {
  title: string;
  description: string;
  url: string;
  tags: string[];
  favicon: string;
  sent: boolean;
}
