import { useState } from "react";

export default function UploadImage({
  imageUrl,
  setImageUrl
}: {
  imageUrl: string;
  setImageUrl: (url: string) => void;
}) {
  const [preview, setPreview] = useState<string>("");

  const handleUpload = async (file: File | null) => {
    if (!file) return;

    // معاينة الصورة قبل الرفع
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );

    const data = await res.json();
    setImageUrl(data.secure_url); // رابط Cloudinary النهائي
  };

  return (
    <div>
      <label htmlFor="uploadimage" className="cursor-pointer">
        <input
          type="file"
          id="uploadimage"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleUpload(e.target.files?.[0] || null)}
        />
        <img
          src={preview || imageUrl || "/images/logo.png"}
          alt="Uploaded"
          width={100}
        />
      </label>
    </div>
  );
}
