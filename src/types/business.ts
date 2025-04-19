export interface Owner {
  _id: string;
  email: string;
  name: string;
}

export interface Business {
  _id: string;
  owner: Owner;
  email: string;
  phone: string;
  businessName: string;
  categories: string[];
  products: string[];
  employees: string[];
  logo?: {
    public_id: string;
    secure_url: string;
    optimizeUrl: string;
  };
  location: string;
  website?: string;
  socialMedia?: string;
  insideDhaka: number;
  outsideDhaka: number;
  subDhaka: number;
  currency: string[];
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MetaResponse {
  totalData: number;
  totalPage: number;
  currentPage: number;
  itemsPerPage: number;
}
