import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UploadButtonComponent from "./upload-button";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-wrap items-center gap-1">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButtonComponent />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
