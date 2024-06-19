import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <header className="w-full flex justify-between p-4 bg-white shadow-md">
        <div className="text-xl font-bold">Kive</div>
        <nav className="flex space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Product</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Library</DropdownMenuItem>
              <DropdownMenuItem>Generate</DropdownMenuItem>
              <DropdownMenuItem>Search</DropdownMenuItem>
              <DropdownMenuItem>Moodboards</DropdownMenuItem>
              <DropdownMenuItem>Stories</DropdownMenuItem>
              <DropdownMenuItem>Video</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost">Solutions</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Careers</Button>
          <Button variant="ghost">Log in</Button>
          <Button variant="solid">Sign up</Button>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">Where creative AI gets to work</h1>
        <p className="text-lg mb-8">
          Kive is the all-in-one platform to generate ideas, produce professional content, organise assets and build brands with AI.
        </p>
        <Button variant="solid" size="lg">Get started</Button>
      </main>
    </div>
  );
};

export default Index;