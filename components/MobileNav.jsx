import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button aria-label="Open menu">
          <AlignJustify className="cursor-pointer" />
        </button>
      </SheetTrigger>

      <SheetContent >
        
        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>

        <div className="flex flex-col justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-16">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          <Socials containerStyles="flex items-center gap-x-6  py-[22rem]" iconsStyles="text-2xl" />
          </div>
          <div className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Sagar Thakur. All rights reserved.
            </div>
            </div>  
        
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
