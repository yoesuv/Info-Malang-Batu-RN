import { GalleryModel } from "../models/gallery-model";
import { PlaceModel } from "../models/place-model";

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  DetailPlace: PlaceModel;
  DetailGallery: GalleryModel;
};
