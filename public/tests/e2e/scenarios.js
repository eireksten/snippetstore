'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Todo list', function() {
  beforeEach(function() {
    browser().navigateTo('/');
    sleep(1);
  });

  it("should move snipped to correct list when user stars it", function() {
    expect(repeater('.nostar').count()).toBe(2);
    expect(repeater('.star').count()).toBe(1);

    element('.nostar:nth-child(1) span.star').click();
    sleep(0.1);

    expect(repeater('.nostar').count()).toBe(1);
    expect(repeater('.star').count()).toBe(2);

    element('.star:nth-child(1) span.star').click();
    sleep(0.1);

    expect(repeater('.notstar').count()).toBe(2);
    expect(repeater('.star').count()).toBe(1);

  });
});