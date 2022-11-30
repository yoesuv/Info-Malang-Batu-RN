import { useQuery } from '@tanstack/react-query';
import { GalleryModel } from '../models/gallery-model';
import { client } from './api-service';

const fetchGallery = async (): Promise<GalleryModel[]> => {
    const result = await client.get<GalleryModel[]>('Gallery_Malang_Batu.json');
    return result.data;
}
  
const UseGallery = () => useQuery<GalleryModel[], Error>(['gallery'], fetchGallery);
  
export default UseGallery;