import { Button, Group } from "@mantine/core";
import { AuthenticationForm } from "../components/form";

export default function IndexPage() {
  return (
    <div className="max-w-[500px] mx-auto flex justify-center items-center min-h-screen">
      <AuthenticationForm />
    </div>
  );
}
