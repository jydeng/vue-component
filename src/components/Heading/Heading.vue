<script>
export default {
  functional: true,
  name: "iHeading",
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render: function(createElement, context) {
    return createElement(`h${context.props.level}`, context.children);
  }
};
</script>
