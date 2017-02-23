/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import chai, { expect } from 'chai'
import sinon from 'sinon'

describe('Template', function () {

  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('somfunction()', () => {
    it('should ...', function () {

      const stub = this.sinon.stub(Template.prototype, 'someFunction')
        .returns(true)

      return expect(Template.someFunction())
        .and.that.be.true
        .and.satisfy(() => (
          sinon.assert.calledOnce(stub)
        ) == null)
    })
  })
})
