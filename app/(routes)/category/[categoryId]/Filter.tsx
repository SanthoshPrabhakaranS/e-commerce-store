"use client";

import { cn } from "@/libs/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React from "react";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const selectedValue = searchParams.get(valueKey);

  return (
    <div className="mb-4">
      <h3 className="pb-2 border-b font-bold">{name}</h3>
      <div className="flex flex-wrap gap-2 pt-2">
        {data.map((item) => (
          <button
            onClick={() => onClick(item.id)}
            className={cn(
              "p-2 bg-white text-black border border-gray-300 text-sm font-medium rounded-md",
              selectedValue === item.id && "bg-black text-white"
            )}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
