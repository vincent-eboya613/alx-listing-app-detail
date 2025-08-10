// pages/property/[id].tsx
import { PROPERTY_LISTING_SAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import Layout from "@/components/layout/Layout"; // Import Layout from your existing components

export default function PropertyPage() {
  const router = useRouter();
  // 'id' here corresponds to the [id] in the file name
  // We expect 'id' to be the property's 'name' slug from PROPERTY_LISTING_SAMPLE
  const { id } = router.query;

  // Find the property that matches the id from the URL
  // Ensure 'id' is a string before using it for comparison
  const property = PROPERTY_LISTING_SAMPLE.find((item) => item.id === id);

  // If the router is not ready yet or property is not found
  if (router.isFallback || !property) {
    // You might want a loading state here or a more styled "not found" message
    return <p className="text-center py-20 text-xl">Property not found or loading...</p>;
  }

  return (
    <Layout> {/* Wrap the content with your existing Layout component */}
      <div>
        <PropertyDetail property={property} />
      </div>
    </Layout>
  );
}