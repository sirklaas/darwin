import PocketBase from 'pocketbase';

const POCKETBASE_URL = 'https://pinkmilk.pockethost.io';

export const pb = new PocketBase(POCKETBASE_URL);

export interface DarwinUser {
  id: string;
  name: string;
  email: string;
  genes: number;
  created: string;
  updated: string;
}

export const authService = {
  async register(name: string, email: string, password: string): Promise<DarwinUser> {
    const data = {
      name,
      email,
      password,
      passwordConfirm: password,
      genes: 0,
    };

    const record = await pb.collection('darwin').create<DarwinUser>(data);
    return record;
  },

  async login(email: string, password: string): Promise<DarwinUser> {
    const authData = await pb.collection('darwin').authWithPassword<DarwinUser>(email, password);
    return authData.record;
  },

  logout() {
    pb.authStore.clear();
  },

  isAuthenticated(): boolean {
    return pb.authStore.isValid;
  },

  getCurrentUser(): DarwinUser | null {
    if (!pb.authStore.isValid || !pb.authStore.record) return null;
    return pb.authStore.record as unknown as DarwinUser;
  },

  async updateGenes(userId: string, genes: number): Promise<DarwinUser> {
    const record = await pb.collection('darwin').update<DarwinUser>(userId, { genes });
    return record;
  },
};

export default pb;
