from django.urls import path

from users.views import UserCreateList, UserUpdate, UserDelete

urlpatterns = [
    path('lists/', UserCreateList.as_view(), name="user-lists"),
    path('create/', UserCreateList.as_view(), name="user-create"),
    path('update/<str:id>', UserUpdate.as_view(), name='user-update'),
    path('<str:pk>/delete/', UserDelete.as_view(), name='user-delete')
]
