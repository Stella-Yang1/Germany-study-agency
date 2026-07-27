import { ImageResponse } from "next/og";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#183c32",color:"#d8e59e",fontSize:19,fontWeight:700,letterSpacing:"0px"}}>GLC</div>, size);
}
