import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignPreview from "./DesignPreview";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const confuguration = await db.configuration.findUnique({
    where: { id },
  });

  if (!confuguration) {
    notFound();
  }

  return <DesignPreview configuration={confuguration} />;
};

export default Page;
