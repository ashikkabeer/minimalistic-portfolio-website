import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Description() {
  return (
    <Tabs defaultValue="account" className="w-screen">
    
    <div className="flex">
    <TabsList>
        
        <TabsTrigger className="px-10" value="short">Short</TabsTrigger>
        <TabsTrigger className="px-10" value="long">Long</TabsTrigger>
      </TabsList>
    </div>
    
    <p>
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using Content here, content
      here, making it lovolved over the
      years, sometimes by accident, sometimes on purpose (injected humour
      and the like).
    </p>
  );
}
