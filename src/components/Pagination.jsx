import { useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

function Pagination() {
  const [active, setActive] = useState(2)
  return (
    <div className='mt-5 flex items-center justify-between max-sm:text-sm'>
      <button>
        <MdOutlineArrowForwardIos className='rotate-180' />
      </button>
      <div>
        {[1, 2, 3, 4, 5, '...', 10].map((num) => (
          <button
            onClick={() => setActive(num)}
            key={num}
            className={`h-9 w-9 rounded-xl font-bold ${
              active === num ? 'bg-green text-white' : ''
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      <button>
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  )
}

export default Pagination
