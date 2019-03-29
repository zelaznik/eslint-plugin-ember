// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/require-super-in-didInsertElement');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const eslintTester = new RuleTester();
const message = 'Call this._super(...arguments) in didInsertElement hook';

eslintTester.run('require-super-in-didInsertElement', rule, {
  valid: [
    {
      code: `export default Component.extend({
        didInsertElement() {
          return this._super(...arguments);
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' }
    },
    {
      code: `export default Route.extend({
        didInsertElement() {
          return this._super(...arguments);
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' }
    },
    {
      code: `export default Controller.extend({
        didInsertElement() {
          return this._super(...arguments);
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' }
    },
    {
      code: `export default Mixin.extend({
        didInsertElement() {
          return this._super(...arguments);
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' }
    },
    {
      code: `export default Service.extend({
        didInsertElement() {
          return this._super(...arguments);
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' }
    },
    {
      code: `export default Component({
        didInsertElement() {
          return this._super(...arguments);
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' }
    },
    {
      code: `export default Route({
        didInsertElement() {
          return this._super(...arguments);
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' }
    },
    {
      code: `export default Controller({
        didInsertElement() {
          return this._super(...arguments);
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' }
    },
    {
      code: `export default Mixin({
        didInsertElement() {
          return this._super(...arguments);
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' }
    },
    {
      code: `export default Service({
        didInsertElement() {
          return this._super(...arguments);
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' }
    },
    {
      code: 'export default Component.extend();',
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: 'export default Route.extend();',
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: 'export default Controller.extend();',
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: 'export default Mixin.extend();',
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: 'export default Service.extend();',
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `export default Component({
        didInsertElement() {
          this._super(...arguments);
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `export default Route({
        didInsertElement() {
          this._super(...arguments);
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `export default Controller({
        didInsertElement() {
          this._super(...arguments);
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `export default Mixin({
        didInsertElement() {
          this._super(...arguments);
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `export default Service({
        didInsertElement() {
          this._super(...arguments);
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `export default Component({
        didInsertElement: function() {
          this._super(...arguments);
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `export default Route({
        didInsertElement: function() {
          this._super(...arguments);
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `export default Controller({
        didInsertElement: function() {
          this._super(...arguments);
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `export default Mixin({
        didInsertElement: function() {
          this._super(...arguments);
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `export default Service({
        didInsertElement: function() {
          this._super(...arguments);
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    }
  ],
  invalid: [
    {
      code: `export default Component.extend({
        didInsertElement() {},
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Component.extend({
        didInsertElement() {
          this.set('prop', 'value');
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Component.extend({
        didInsertElement() {
          this.set('prop', 'value');
          this.set('prop2', 'value2');
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Route.extend({
        didInsertElement() {},
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Route.extend({
        didInsertElement() {
          this.set('prop', 'value');
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Route.extend({
        didInsertElement() {
          this.set('prop', 'value');
          this.set('prop2', 'value2');
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Controller.extend({
        didInsertElement() {},
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Controller.extend({
        didInsertElement() {
          this.set('prop', 'value');
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Controller.extend({
        didInsertElement() {
          this.set('prop', 'value');
          this.set('prop2', 'value2');
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Mixin.extend({
        didInsertElement() {},
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Mixin.extend({
        didInsertElement() {
          this.set('prop', 'value');
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Mixin.extend({
        didInsertElement() {
          this.set('prop', 'value');
          this.set('prop2', 'value2');
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Service.extend({
        didInsertElement() {},
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Service.extend({
        didInsertElement() {
          this.set('prop', 'value');
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Service.extend({
        didInsertElement() {
          this.set('prop', 'value');
          this.set('prop2', 'value2');
        },
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }],
    },
    {
      code: `export default Component.extend({
        didInsertElement() {
          return;
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Route.extend({
        didInsertElement() {
          return;
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Controller.extend({
        didInsertElement() {
          return;
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Mixin.extend({
        didInsertElement() {
          return;
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Service.extend({
        didInsertElement() {
          return;
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Component({
        didInsertElement() {
          return;
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Route({
        didInsertElement() {
          return;
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Controller({
        didInsertElement() {
          return;
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Mixin({
        didInsertElement() {
          return;
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Service({
        didInsertElement() {
          return;
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Component.extend({
        didInsertElement() {
          return 'meh';
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Route.extend({
        didInsertElement() {
          return 'meh';
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Controller.extend({
        didInsertElement() {
          return 'meh';
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Mixin.extend({
        didInsertElement() {
          return 'meh';
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Service.extend({
        didInsertElement() {
          return 'meh';
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Component({
        didInsertElement() {
          return 'meh';
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Route({
        didInsertElement() {
          return 'meh';
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Controller({
        didInsertElement() {
          return 'meh';
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Mixin({
        didInsertElement() {
          return 'meh';
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    },
    {
      code: `export default Service({
        didInsertElement() {
          return 'meh';
        }
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      output: null,
      errors: [{ message, line: 2 }]
    }
  ],
});
