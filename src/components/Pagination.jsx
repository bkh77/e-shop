import { useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

function Pagination() {
  const [active, setActive] = useState(2)
  return (
    <div className='flex justify-between items-center mt-5 max-sm:text-sm'>
      <button>
        <MdOutlineArrowForwardIos className='rotate-180' />
      </button>
      <div>
        {[1, 2, 3, 4, 5, '...', 10].map((num) => (
          <button
            onClick={() => setActive(num)}
            key={num}
            className={`w-9 h-9 rounded-xl font-bold ${
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
