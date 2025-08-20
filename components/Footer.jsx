import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='bg-tertiary dark:bg-secondary/40 py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'
          />
          {/* copyright */}
          <div className='text-muted-foreground'>
            Copyright © Sagar Thakur. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
