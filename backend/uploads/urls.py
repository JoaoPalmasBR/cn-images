from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('upload/', views.upload_arquivo, name='upload_arquivo'),
    # Rota para obter o token JWT
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # Rota para obter um novo token com o refresh token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
