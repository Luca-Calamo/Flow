// app/components/FolderSelection.js
"use client";

import { useState } from "react";
import "../css/styles.css";

export default function FolderSelection({ onClose, onSave }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    // Category definitions
    const categories = [
        {
            id: "favorites",
            name: "Favorites",
            subcategories: [],
        },
        {
            id: "shortSleeve",
            name: "Short Sleeve",
            subcategories: ["Pull Over", "Button Up", "Polo", "Formal"],
        },
        {
            id: "longSleeve",
            name: "Long Sleeve",
            subcategories: [],
        },
        {
            id: "jacket",
            name: "Jacket",
            subcategories: [],
        },
        {
            id: "tanks",
            name: "Tanks",
            subcategories: [],
        },
    ];

    const toggleSelection = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((i) => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleSave = () => {
        onSave(selectedItems);
        onClose();
    };

    const handleBack = () => {
        setSelectedCategory(null);
    };

    return (
        <div className='modal-overlay flex items-center justify-center'>
            <div className='modal-content'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center'>
                        {selectedCategory && (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='cursor-pointer mr-2'
                                onClick={handleBack}
                            >
                                <path d='M15 18l-6-6 6-6' />
                            </svg>
                        )}
                        <h2 className='text-lg font-medium text-black'>
                            Save in:
                        </h2>
                    </div>
                    <button onClick={onClose} className='text-gray-600'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <line x1='18' y1='6' x2='6' y2='18'></line>
                            <line x1='6' y1='6' x2='18' y2='18'></line>
                        </svg>
                    </button>
                </div>

                <div
                    className='px-4 pb-4 overflow-y-auto'
                    style={{ maxHeight: "80vh" }}
                >
                    {!selectedCategory
                        ? categories.map((category) => (
                              <div
                                  key={category.id}
                                  className='flex items-center mb-4 cursor-pointer text-black'
                                  onClick={() =>
                                      category.subcategories.length > 0
                                          ? setSelectedCategory(category)
                                          : toggleSelection(category.name)
                                  }
                              >
                                  <div className='w-6 h-6 flex items-center justify-center mr-3 border rounded border-gray-400'>
                                      {selectedItems.includes(
                                          category.name
                                      ) && (
                                          <svg
                                              xmlns='http://www.w3.org/2000/svg'
                                              width='16'
                                              height='16'
                                              viewBox='0 0 24 24'
                                              fill='none'
                                              stroke='currentColor'
                                              strokeWidth='2'
                                              strokeLinecap='round'
                                              strokeLinejoin='round'
                                          >
                                              <polyline points='20 6 9 17 4 12'></polyline>
                                          </svg>
                                      )}
                                  </div>
                                  <div className='flex items-center'>
                                      <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          width='20'
                                          height='20'
                                          viewBox='0 0 24 24'
                                          fill='none'
                                          stroke='currentColor'
                                          strokeWidth='2'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          className='mr-2'
                                      >
                                          <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
                                      </svg>
                                      {category.name}
                                  </div>
                              </div>
                          ))
                        : selectedCategory.subcategories.map((subcat) => (
                              <div
                                  key={subcat}
                                  className='flex items-center mb-4 cursor-pointer text-black'
                                  onClick={() => toggleSelection(subcat)}
                              >
                                  <div className='w-6 h-6 flex items-center justify-center mr-3 border rounded border-gray-400'>
                                      {selectedItems.includes(subcat) && (
                                          <svg
                                              xmlns='http://www.w3.org/2000/svg'
                                              width='16'
                                              height='16'
                                              viewBox='0 0 24 24'
                                              fill='none'
                                              stroke='currentColor'
                                              strokeWidth='2'
                                              strokeLinecap='round'
                                              strokeLinejoin='round'
                                          >
                                              <polyline points='20 6 9 17 4 12'></polyline>
                                          </svg>
                                      )}
                                  </div>
                                  <div className='flex items-center'>
                                      <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          width='20'
                                          height='20'
                                          viewBox='0 0 24 24'
                                          fill='none'
                                          stroke='currentColor'
                                          strokeWidth='2'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          className='mr-2'
                                      >
                                          <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
                                      </svg>
                                      {subcat}
                                  </div>
                              </div>
                          ))}
                </div>

                {selectedCategory && (
                    <div className='p-4 flex justify-end'>
                        <button onClick={handleSave} className='button-primary'>
                            Save
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
