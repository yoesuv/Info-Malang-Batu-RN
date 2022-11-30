import { useQuery } from '@tanstack/react-query';
import { PinModel } from '../models/pin-model';
import { client } from './api-service';

const fetchPins = async (): Promise<PinModel[]> => {
    const result = await client.get<PinModel[]>('Maps_Malang_Batu.json');
    return result.data;
}
  
const UsePins = () => useQuery<PinModel[], Error>(['listPin'], fetchPins);
  
export default UsePins;