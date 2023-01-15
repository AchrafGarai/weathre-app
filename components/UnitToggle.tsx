'use client'
import { useUnitStore } from '@/utils/unitStore'

function UnitToggle() {
  const toggleUnit = useUnitStore((state) => state.toggleUnit)
  const unit = useUnitStore((state) => state.unit)

  const hendleUnitChange = () => {
    if (unit === 'metric') {
      toggleUnit('imperial')
    } else {
      toggleUnit('metric')
    }
  }
  return (
    <div className="p-2 px-3 rounded-lg border border-zinc-700 bg-zinc-800">
      <button onClick={hendleUnitChange}>
        {unit === 'metric' ? 'C°' : 'F°'}
      </button>
    </div>
  )
}

export default UnitToggle
