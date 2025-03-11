from django.shortcuts import render
from .forms import ArquivoForm

def upload_arquivo(request):
    if request.method == 'POST':
        form = ArquivoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    else:
        form = ArquivoForm()
    return render(request, 'uploads/upload.html', {'form': form})
