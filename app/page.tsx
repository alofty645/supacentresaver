import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export default function Home() {
  const fetchProducts = async () => {
    "use server";
    const supabase = createClient();

    let { data: products, error } = await supabase.from("products").select("*");
    console.log(products);
    if (error) throw error;
    return { products };
  };

  return (
    <main>
      <form action={fetchProducts}>
        <Button>Fetch Products</Button>
      </form>
    </main>
  );
}
