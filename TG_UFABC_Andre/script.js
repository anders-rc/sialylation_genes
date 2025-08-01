const supabaseUrl = 'postgresql://postgres:[TGufabc2025]@db.inidrupdvxrzphlulgxd.supabase.co:5432/postgres';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluaWRydXBkdnhyenBobHVsZ3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2Mzc2MDYsImV4cCI6MjA2ODIxMzYwNn0.NiZQsRtjGOblsaaqFQ7Oc-ffXlnNOvizyXeNX_BrPbU';

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function carregarUsuarios() {
  const { data, error } = await supabase.from('usuarios').select('*');

  const lista = document.getElementById('usuarios');

  if (error) {
    lista.innerHTML = `<li>Erro: ${error.message}</li>`;
    return;
  }

  data.forEach(usuario => {
    const li = document.createElement('li');
    li.textContent = `${usuario.nome} - ${usuario.email}`;
    lista.appendChild(li);
  });
}

carregarUsuarios();
