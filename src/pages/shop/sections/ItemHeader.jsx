// import { FaCheck } from "react-icons/fa";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { PiShoppingCartLight } from "react-icons/pi";
// import { Combobox, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";
// import { useSwagList } from "../../../hooks/Queries/shop/useSwagList";
import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CartDrawer from "../../../components/shop/CartDrawer";
import CartIcon from "../../../components/shop/CartIcon";
import SectionWrapper from "../../../components/shop/SectionWrapper";

// eslint-disable-next-line no-unused-vars
function ItemHeader({ show }) {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const pathnames = pathname
    .split("/")
    .filter((path) => path && path !== "category" && path !== id);

  // const { data: swag, isSuccess } = useSwagList();

  // const [selected, setSelected] = useState(isSuccess && swag[0]);
  // const [query, setQuery] = useState("");

  // const filteredSwag =
  //   query === ""
  //     ? swag
  //     : swag.filter((item) =>
  //         item.name
  //           .toLowerCase()
  //           .replace(/\s+/g, "")
  //           .includes(query.toLowerCase().replace(/\s+/g, ""))
  //       );

  return (
    <div className="flex justify-between items-center">
      <SectionWrapper>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="flex items-center">
          <ol className="flex space-x-2">
            {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return isLast ? (
                <li
                  className="text-primary capitalize"
                  aria-current="page"
                  key={to}
                >
                  {value}
                </li>
              ) : (
                <li key={to}>
                  <a
                    href={to}
                    className="after:content-['>'] after:ml-2 text-[#656767] hover:text-primary capitalize"
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </SectionWrapper>

      <button
        type="button"
        aria-label="open cart"
        onClick={() => setOpen(true)}
      >
        <CartIcon />
      </button>
      <CartDrawer open={open} setOpen={setOpen} />

      {/* Search box */}
      {/* <div className="py-10 flex space-x-4 justify-end w-full sm:w-1/2">
        {pathname === "/shop" && (
          <div className="relative block w-full">
            <Combobox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#009975] sm:text-sm">
                  <Combobox.Input
                    className="placeholder:text-base placeholder:text-[#49454F] block w-full border border-[#49454F] rounded py-3 pl-9 pr-3 focus:outline-none focus:border-[#009975] focus:ring-[#009975] focus:ring-1 sm:text-sm"
                    displayValue={(item) => item.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <FaMagnifyingGlass
                      className="h-7 w-7 text-gray-400 pr-2 "
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {filteredSwag?.length === 0 && query !== "" ? (
                      <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                        Nothing found! 🫤
                      </div>
                    ) : (
                      filteredSwag?.map((item) => (
                        <Combobox.Option
                          key={item.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-[#009975] text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={item}
                        >
                          {({ selected, active }) => (
                            <Link to={`/shop/item/${item.id}`}>
                              <div
                                className={`flex items-center gap-8 truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                <LazyLoadImage
                                  src={item.image}
                                  alt={item.name}
                                  className="h-12 w-12 rounded"
                                />{" "}
                                <span>{item.name}</span>
                              </div>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-[#009975]"
                                  }`}
                                >
                                  <FaCheck
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </Link>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        )}
        <button
          type="button"
          aria-label="Shopping cart"
          className="ml-6 items-end"
          onClick={show}
        >
          <MdOutlineAddShoppingCart className="h-10 w-10 p-2 bg-green-header text-white border rounded-full" />
        </button>
      </div> */}
    </div>
  );
}

export default ItemHeader;
ItemHeader.propTypes = {
  show: PropTypes.func,
};

ItemHeader.defaultProps = {
  show: () => {},
};
