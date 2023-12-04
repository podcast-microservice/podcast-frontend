import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IconButton } from '@mui/material';
import cn from 'classnames';
import { useEffect, useState } from 'react';

interface IProps {
  totalItem: number;
  pageSize: number;
  defaultPage?: number;
  hasNavigation?: boolean;
  onChange?: (value: number) => void;
}

function Pagination({ totalItem, pageSize, defaultPage = 1, hasNavigation, onChange }: IProps) {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const pagesCount = Math.ceil(totalItem / pageSize);
  const paginationShowed = 5;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  const startIndex = currentPage < pagesCount - 2 ? Math.max(currentPage - 3, 0) : pagesCount - paginationShowed;
  const endIndex = Math.min(startIndex + paginationShowed, pagesCount);

  const handleSelectPage = (page: number) => {
    setCurrentPage(page);
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (onChange) {
      onChange(currentPage);
    }
  }, [currentPage, onChange]);

  if (pagesCount === 1) return null;

  return (
    <div className='tw-flex tw-items-center tw-justify-center tw-gap-2'>
      {hasNavigation && (
        <IconButton
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className='tw-flex tw-items-center tw-justify-center tw-shadow-[rgba(0,_0,_0,_0.24)_0px_2px_8px] tw-rounded-full tw-h-8 tw-w-8 hover:tw-drop-shadow-xl'
        >
          <NavigateBeforeIcon className='tw-text-[28px] tw-text-blue-700' />
        </IconButton>
      )}
      {currentPage > 3 && <p className='tw-font-bold'>...</p>}
      {pages.slice(startIndex, endIndex).map((page) => {
        const pageClass = cn(
          {
            'tw-bg-blue-500 tw-text-white': currentPage === page,
            'tw-bg-white tw-text-blue-700': currentPage !== page
          },
          'tw-font-bold tw-shadow-[rgba(0,_0,_0,_0.24)_0px_2px_8px] tw-rounded-full tw-h-8 tw-w-8 hover:tw-drop-shadow-xl'
        );
        return (
          <button key={page} className={pageClass} onClick={() => handleSelectPage(page)}>
            {page}
          </button>
        );
      })}
      {currentPage < pagesCount - 2 && <p className='tw-font-bold'>...</p>}
      {hasNavigation && (
        <IconButton
          onClick={handleNextPage}
          disabled={currentPage === pagesCount}
          className='tw-flex tw-items-center tw-justify-center tw-shadow-[rgba(0,_0,_0,_0.24)_0px_2px_8px] tw-rounded-full tw-h-8 tw-w-8 hover:tw-drop-shadow-xl'
        >
          <NavigateNextIcon className='tw-text-[28px] tw-text-blue-700' />
        </IconButton>
      )}
    </div>
  );
}

export default Pagination;
