import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getAdminUser, canManageContent } from "~/server/auth/guards";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "8MB", maxFileCount: 4 },
  })
    .middleware(async () => {
      const user = await getAdminUser();
      if (!user || !canManageContent(user.role)) {
        throw new Error("Yetkisiz erisim.");
      }
      return { userId: user.id };
    })
    .onUploadComplete(({ file }) => {
      return { url: file.ufsUrl };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
