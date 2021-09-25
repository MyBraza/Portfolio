import React from 'react'

export default function withHoverAnimation<T>(Element: React.FC<T>) {
  return (props: any) => (
    <div className="has-animated-element flex h-full">
      <div className="flex flex-col">
        <Element {...props} />
        <div className="flex flex-grow flex-col items-end pl-4 w-full">
          <div className="animated-underline" />
        </div>
      </div>
      <div className="flex items-end pt-4 h-full">
        <div className="animated-side-border-left" />
      </div>
    </div>
  )
}
