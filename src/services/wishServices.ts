import { WishRepository } from '../data-source';
import { Wish } from "../entity/wish";

export class WishService {
  async create(userId: number,
               content: string): Promise<void> {
    const newWish = new Wish(userId, content);
    await WishRepository.save(newWish);
  }

  async delete(wishId: number): Promise<void> {
    await WishRepository.delete(wishId);
  }
}