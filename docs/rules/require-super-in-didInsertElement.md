## Call _super in didInsertElement lifecycle hooks

### Rule name: `require-super-in-didInsertElement`

When overriding the `didInsertElement` lifecycle hook inside Ember Components, Controllers, Routes or Mixins, it is necessary to include a call to `_super`.

```javascript
// BAD
export default Ember.Component.extend({
  didInsertElement() {
    this.set('items', []);
  },
});
```

```javascript
// GOOD
export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    this.set('items', []);
  },
});
```
