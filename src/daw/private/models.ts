/** MVSEP `sep_type` values from their API. These jobs run on MVSEP, not on the phone. */
export type MvsepModel = {
  id: string;
  sepType: number;
  addOpt1: string;
  name: string;
  detail: string;
};

export const MVSEP_MODELS: MvsepModel[] = [
  { id: "demucs-ht", sepType: 20, addOpt1: "1", name: "Demucs4 HT", detail: "Vocals, drums, bass, other" },
  { id: "demucs-ft", sepType: 20, addOpt1: "0", name: "Demucs4 HT fine", detail: "Slower 4-stem" },
  { id: "demucs-6", sepType: 20, addOpt1: "2", name: "Demucs4 6-stem", detail: "Adds piano and guitar" },
  { id: "bs-sw", sepType: 63, addOpt1: "", name: "BS Roformer SW", detail: "Drums, bass, guitar, piano, other" },
  { id: "bs-vocal", sepType: 40, addOpt1: "81", name: "BS Roformer", detail: "Vocals and instrumental" },
  { id: "melband", sepType: 48, addOpt1: "4", name: "MelBand Roformer", detail: "Vocals and instrumental" },
  { id: "scnet", sepType: 46, addOpt1: "5", name: "SCNet XL", detail: "Vocals and instrumental" },
  { id: "mdx23", sepType: 25, addOpt1: "7", name: "MDX23C", detail: "Vocals and instrumental" },
  { id: "uvr-drums", sepType: 9, addOpt1: "10", name: "UVR drums", detail: "Drum stem" },
  { id: "uvr-bass", sepType: 9, addOpt1: "11", name: "UVR bass", detail: "Bass stem" },
];

export function mvsepModel(id: string): MvsepModel | undefined {
  return MVSEP_MODELS.find((model) => model.id === id);
}
