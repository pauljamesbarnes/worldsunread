(() => {
  const form = document.querySelector('#interest-form');
  const source = document.querySelector('#source');
  const params = new URLSearchParams(window.location.search);
  source.value = params.get('source') || 'website-direct';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const intents = data.getAll('intent');
    if (!intents.length) { alert('Please tell us at least one way you might use the edition.'); return; }
    const lines = [
      'Yalkut Shimoni on Isaiah — expression of interest', '',
      `Email: ${data.get('email')}`, `Source: ${data.get('source')}`,
      `Use: ${intents.join(', ')}`, `Format: ${data.get('format')}`,
      `Purchaser: ${data.get('purchaser')}`, `Price: ${data.get('price')}`,
      `Next book: ${data.get('next_book') || '—'}`, `Comment: ${data.get('comment') || '—'}`,
      `Optional newsletter consent: ${data.get('newsletter') === 'yes' ? 'Yes' : 'No'}`
    ];
    const subject = encodeURIComponent('Yalkut Isaiah — expression of interest');
    const body = encodeURIComponent(lines.join('\n'));
    document.querySelector('#thanks').hidden = false;
    document.querySelector('#thanks').focus();
    window.location.href = `mailto:hello@worldsunread.com?subject=${subject}&body=${body}`;
  });
})();
