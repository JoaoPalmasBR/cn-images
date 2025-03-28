'''from django.shortcuts import render
from .forms import ArquivoForm

def upload_arquivo(request):
    if request.method == 'POST':
        form = ArquivoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    else:
        form = ArquivoForm()
    return render(request, 'uploads/upload.html', {'form': form})
'''

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .forms import ArquivoForm

@csrf_exempt
def upload_arquivo(request):
    if request.method == 'POST':
        form = ArquivoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return JsonResponse({'mensagem': 'Arquivo enviado com sucesso!'})
        return JsonResponse({'erro': 'Formulário inválido'}, status=400)
    return JsonResponse({'erro': 'Método não permitido'}, status=405)

