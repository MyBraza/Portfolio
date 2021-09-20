import React, { createRef, FC, memo, useCallback, useState } from 'react'
import { AnimatedHeading } from '@components/molecules'
import { Heading3 } from '@components/atoms'
import { CaretDown, CaretUp } from '@images'

export type TDropdownOptionValue = string | number | boolean | null

export interface IDropdownOption {
  value: TDropdownOptionValue
  label: string
}

type TDropdownProps = {
  className: string
  options: Array<IDropdownOption>
  optionsClassName?: string
  open?: 'on-hover' | 'on-click'
  showOnSelect?: boolean
  defaultOption?: IDropdownOption
  onChange?: (value: IDropdownOption) => void
}

const placeholder: IDropdownOption = { value: null, label: 'Select an option' }

const Dropdown: FC<TDropdownProps> = memo(
  ({
    className,
    options,
    optionsClassName,
    open = 'on-click',
    showOnSelect,
    defaultOption,
    onChange
  }: TDropdownProps) => {
    const [active, setActive] = useState<boolean>(false)

    const [selectedOption, setSelectedOption] = useState<IDropdownOption>(
      defaultOption ?? placeholder
    )

    const dropdownMenu = createRef<HTMLDivElement>()

    const toggleDropdown = useCallback(() => {
      if (dropdownMenu.current) {
        dropdownMenu.current.focus()
      }
      setActive(!active)
    }, [active])

    const onSelect = (option: IDropdownOption) => {
      return () => {
        setSelectedOption(option ?? placeholder)
        onChange?.(option)
        showOnSelect ? (() => {})() : setActive(false)
      }
    }

    const optionItems = options.map((option, id) => (
      <div
        key={id}
        onClick={onSelect(option)}
        data-value={option.value}
        className={optionsClassName}
      >
        <AnimatedHeading className="mr-3" HeadingType={Heading3}>
          {option.label}
        </AnimatedHeading>
      </div>
    ))

    return (
      <div
        className="flex flex-col cursor-pointer"
        onMouseEnter={() => {
          open === 'on-hover' ? setActive(true) : (() => {})()
        }}
        onMouseLeave={() => {
          open === 'on-hover' ? setActive(false) : (() => {})()
        }}
      >
        <div
          className="flex items-center"
          onClick={open === 'on-click' ? toggleDropdown : () => {}}
        >
          <Heading3 className={className}>{selectedOption.label}</Heading3>
          {!active && <CaretDown className="ml-1 mb-1 w-2 fill-current" />}
          {active && <CaretUp className="ml-1 mb-1 w-2 fill-current" />}
        </div>
        <div className="relative">
          <div
            ref={dropdownMenu}
            tabIndex={0}
            className={`absolute flex flex-col gap-1 pt-2 w-full ${
              !active && 'hidden'
            }`}
          >
            {optionItems}
          </div>
        </div>
      </div>
    )
  }
)

Dropdown.displayName = 'Dropdown'

export default Dropdown
