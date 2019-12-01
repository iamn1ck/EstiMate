import getStartAndEndDates from "./getStartAndEndDates";
import netWorthOverTimeToFutureFixture from "../testUtils/netWorthOverTimeToFutureFixture";



describe('getStartAndEndDates', () => {
  it('should return correct results when hasZoomed: false', () => {
    const { startDate, endDate } = getStartAndEndDates({
      scale: 1,
      focalX: 15,
      width: 30,
      netWorthOverTimeToFuture: netWorthOverTimeToFutureFixture,
      hasZoomed: false,
      zoomedDates: 'whatever this is'
    })

    expect(startDate.toString()).toBe('Jul 02 1988')
    expect(endDate.toString()).toBe('Jul 06 1988')
  })

  it('should return correct results when hasZoomed: true', () => {
    const { startDate, endDate } = getStartAndEndDates({
      scale: 1,
      focalX: 15,
      width: 30,
      netWorthOverTimeToFuture: netWorthOverTimeToFutureFixture,
      hasZoomed: true,
      zoomedDates: ['Jan 03 2016', 'Jan 04 2016', 'Jan 05 2016']
    })

    expect(startDate.toString()).toBe('Jan 03 2016')
    expect(endDate.toString()).toBe('Jan 07 2016')
  })
})