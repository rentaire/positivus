import { useState } from 'react';
import Burger from '@/assets/svg/burger.svg?react';
import { MenuNavigation } from '@/config/menuNavigation.ts';
import { Link } from '@/components/ui-entities/link.tsx';
import { cn } from '@/utils/cn.ts';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className={'1100:size-auto relative flex size-6 flex-col'}>
      <div
        className={cn(
          '1100:p-0 1100:block 1100:relative 1100:top-auto 1100:right-auto rounded-14 absolute top-[-24px] right-[-20px] flex flex-col items-end gap-y-14 px-5 pt-6 pb-18',
          isMenuOpen && 'bg-dark'
        )}
      >
        <Burger
          className={cn(
            '1100:hidden text-dark flex size-6 cursor-pointer',
            isMenuOpen ? 'text-white' : 'text-black'
          )}
          onClick={() => setIsMenuOpen(prevValue => !prevValue)}
        />
        <nav
          className={cn(
            '1100:block 1100:!visible 1100:rounded-none 1100:bg-transparent rounded-14 1100:w-auto invisible w-[320px]',
            isMenuOpen && 'visible'
          )}
        >
          <ul className={'1100:flex-row 1100:items-start flex flex-col items-center gap-10'}>
            {MenuNavigation.map(({ title, link }, index) => (
              <li key={index} className={'1100:px-0 1100:py-0 flex justify-end gap-4 px-2'}>
                <Link href={link} text={isMenuOpen ? 'light' : 'dark'}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
