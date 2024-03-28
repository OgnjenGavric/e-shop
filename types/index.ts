import { User } from '@prisma/client';

export type SafeUser =Omit<User, "createdAt" | "updateAt" | "emailVeified"> & {
  createdAt: string;
  updateAt: string;
  emailVeified: string | null;
}