// X-Factor: Value Creation Calculator (illustrative only)
(function () {
  const $ = (id) => document.getElementById(id);
  const rev = $("rev"), upl = $("upl"), mul = $("mul");
  if (!rev) return;

  const fmtM = (n) =>
    "$" + n.toLocaleString(undefined, { maximumFractionDigits: n < 100 ? 1 : 0 }) + "M";
  const shown = { inc: 0, ev: 0 };
  let raf;

  // Animate both counters together from their current values to new targets.
  function animateTo(targets) {
    cancelAnimationFrame(raf);
    const from = { inc: shown.inc, ev: shown.ev };
    const t0 = performance.now(), dur = 450;
    function tick(now) {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      shown.inc = from.inc + (targets.inc - from.inc) * e;
      shown.ev = from.ev + (targets.ev - from.ev) * e;
      $("incOut").textContent = fmtM(shown.inc);
      $("evOut").textContent = fmtM(shown.ev);
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
  }

  function update() {
    const r = +rev.value, u = +upl.value / 100, m = +mul.value;
    $("revOut").textContent = fmtM(r);
    $("uplOut").textContent = "+" + upl.value + "%";
    $("mulOut").textContent = m + "x";
    const inc = r * u; // incremental annual revenue from better go-to-market execution
    animateTo({ inc: inc, ev: inc * m }); // illustrative enterprise value at the exit multiple
  }

  [rev, upl, mul].forEach((el) => el.addEventListener("input", update));
  update();
})();
